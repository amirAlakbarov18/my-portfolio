// DOM Elements
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const navbar = document.getElementById("navbar")
const navLinks = document.querySelectorAll(".nav-link")
const contactForm = document.getElementById("contact-form")
const skillCards = document.querySelectorAll(".skill-card")

// Mobile Navigation Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Active navigation link highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const top = section.offsetTop
    const bottom = top + section.offsetHeight
    const id = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`)

    if (scrollPos >= top && scrollPos <= bottom) {
      navLinks.forEach((link) => link.classList.remove("active"))
      if (navLink) {
        navLink.classList.add("active")
      }
    }
  })
}

window.addEventListener("scroll", updateActiveNavLink)

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate skill progress bars
      if (entry.target.classList.contains("skill-card")) {
        const progressBar = entry.target.querySelector(".progress-bar")
        const progress = progressBar.getAttribute("data-progress")
        setTimeout(() => {
          progressBar.style.width = progress + "%"
        }, 200)
      }
    }
  })
}, observerOptions)

// Add animation classes and observe elements
function initAnimations() {
  const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .about-text, .about-image, .contact-info, .contact-form",
  )

  animatedElements.forEach((el, index) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
}

// Contact form handling
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Simple form validation
  if (!name || !email || !subject || !message) {
    showNotification("Please fill in all fields", "error")
    return
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address", "error")
    return
  }

  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]')
  const originalText = submitButton.innerHTML

  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitButton.disabled = true

  setTimeout(() => {
    showNotification("Message sent successfully! I'll get back to you soon.", "success")
    contactForm.reset()
    submitButton.innerHTML = originalText
    submitButton.disabled = false
  }, 2000)
})

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `

  // Add to document
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Close button functionality
  const closeButton = notification.querySelector(".notification-close")
  closeButton.addEventListener("click", () => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      notification.remove()
    }, 300)
  })

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = "translateX(400px)"
      setTimeout(() => {
        notification.remove()
      }, 300)
    }
  }, 5000)
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Parallax effect for hero section
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    const rate = scrolled * -0.5

    if (hero) {
      hero.style.transform = `translateY(${rate}px)`
    }
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initAnimations()
  initParallax()
  updateActiveNavLink()

  // Add some delay for hero animations
  setTimeout(() => {
    const heroContent = document.querySelector(".hero-content")
    if (heroContent) {
      heroContent.style.opacity = "1"
      heroContent.style.transform = "translateY(0)"
    }
  }, 500)
})

// Skill card hover effects
skillCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })
})

// Add loading animation
window.addEventListener("load", () => {
  const loader = document.createElement("div")
  loader.className = "page-loader"
  loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading...</p>
        </div>
    `

  loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        color: white;
        font-family: 'Inter', sans-serif;
        opacity: 1;
        transition: opacity 0.5s ease;
    `

  const loaderSpinner = `
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loader-content {
            text-align: center;
        }
    `

  const style = document.createElement("style")
  style.textContent = loaderSpinner
  document.head.appendChild(style)

  document.body.appendChild(loader)

  setTimeout(() => {
    loader.style.opacity = "0"
    setTimeout(() => {
      loader.remove()
      style.remove()
    }, 500)
  }, 1500)
})

// Add custom cursor effect
function initCustomCursor() {
  const cursor = document.createElement("div")
  cursor.className = "custom-cursor"
  cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: #2563eb;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
        opacity: 0;
    `

  document.body.appendChild(cursor)

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px"
    cursor.style.top = e.clientY - 10 + "px"
    cursor.style.opacity = "0.7"
  })

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "0.7"
  })

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0"
  })

  // Scale cursor on hover over interactive elements
  const interactiveElements = document.querySelectorAll("a, button, .btn, .project-card, .skill-card")

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)"
      cursor.style.background = "#7c3aed"
    })

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)"
      cursor.style.background = "#2563eb"
    })
  })
}

// Initialize custom cursor on desktop only
if (window.innerWidth > 768) {
  initCustomCursor()
}
