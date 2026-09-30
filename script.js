// Vajra LED - Business Page Script

document.addEventListener('DOMContentLoaded', function () {
  // Handle FAQ accordion toggle (matching vajraled.com)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-btn');
    const answer = item.querySelector('.faq-answer');
    
    if (btn && answer) {
      btn.addEventListener('click', function () {
        const isCurrentlyActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(function (other) {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.classList.add('hidden');
        });

        // Toggle current item
        if (!isCurrentlyActive) {
          item.classList.add('active');
          answer.classList.remove('hidden');
        } else {
          item.classList.remove('active');
          answer.classList.add('hidden');
        }
      });
    }
  });

  // Handle CTA button clicks to auto-select business type and scroll to form
  const ctaButtons = document.querySelectorAll('[data-business-type]');
  const businessTypeSelect = document.getElementById('businessType');
  const enquirySection = document.getElementById('business-enquiry');

  ctaButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      const type = button.getAttribute('data-business-type');
      if (businessTypeSelect && type) {
        businessTypeSelect.value = type;
      }
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple Enquiry Form submission handling
  const form = document.getElementById('enquiry-form');
  const alertBox = document.getElementById('form-success-alert');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Submitting...';
      submitBtn.disabled = true;

      setTimeout(function () {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        
        if (alertBox) {
          alertBox.classList.remove('hidden');
          alertBox.scrollIntoView({ behavior: 'smooth' });
        }
        
        form.reset();
      }, 800);
    });
  }
});
