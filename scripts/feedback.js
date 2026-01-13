// User feedback widget functionality
(function() {
  function createFeedbackModal() {
    const modal = document.createElement('div');
    modal.id = 'feedback-modal';
    modal.className = 'feedback-modal';
    modal.innerHTML = `
      <div class="feedback-modal-content">
        <button class="feedback-close" aria-label="Close feedback form">
          <i class="fas fa-times"></i>
        </button>
        <h3>Share Your Feedback</h3>
        <p>Your feedback helps improve this website. Thank you!</p>
        <form id="feedback-form" class="feedback-form">
          <div class="form-group">
            <label for="feedback-type">Type:</label>
            <select id="feedback-type" name="type" required>
              <option value="">Select type...</option>
              <option value="general">General Feedback</option>
              <option value="bug">Report a Bug</option>
              <option value="suggestion">Suggestion</option>
              <option value="question">Question</option>
            </select>
          </div>
          <div class="form-group">
            <label for="feedback-message">Message:</label>
            <textarea 
              id="feedback-message" 
              name="message" 
              rows="5" 
              placeholder="Share your thoughts..."
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="feedback-email">Email (optional):</label>
            <input 
              type="email" 
              id="feedback-email" 
              name="email" 
              placeholder="your.email@example.com"
            />
          </div>
          <div class="feedback-actions">
            <button type="button" class="btn-cancel">Cancel</button>
            <button type="submit" class="btn-submit">Submit Feedback</button>
          </div>
        </form>
        <div id="feedback-success" class="feedback-success" style="display: none;">
          <i class="fas fa-check-circle"></i>
          <p>Thank you for your feedback!</p>
          <p class="feedback-note">Your message has been received.</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  function createFeedbackButton() {
    const button = document.createElement('button');
    button.id = 'feedback-button';
    button.className = 'feedback-button';
    button.setAttribute('aria-label', 'Provide feedback');
    button.setAttribute('title', 'Provide feedback');
    button.innerHTML = '<i class="fas fa-comment-dots"></i>';
    document.body.appendChild(button);
    return button;
  }

  function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Reset form and hide success message
    const form = modal.querySelector('#feedback-form');
    const success = modal.querySelector('#feedback-success');
    if (form) form.style.display = 'block';
    if (success) success.style.display = 'none';
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset form
    const form = modal.querySelector('form');
    if (form) form.reset();
  }

  function handleSubmit(e, modal) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // In a real implementation, this would send to a backend or service
    // For now, we'll just show a success message
    console.log('Feedback submitted:', {
      type: formData.get('type'),
      message: formData.get('message'),
      email: formData.get('email') || 'Not provided'
    });

    // Show success message
    form.style.display = 'none';
    const success = modal.querySelector('#feedback-success');
    if (success) success.style.display = 'flex';
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      closeModal(modal);
      // Reset form visibility for next time
      setTimeout(() => {
        form.style.display = 'block';
        form.reset();
      }, 300);
    }, 3000);
  }

  function initializeFeedback() {
    // Create modal and button
    const modal = createFeedbackModal();
    const button = createFeedbackButton();

    // Button click - open modal
    button.addEventListener('click', () => openModal(modal));

    // Close button click
    const closeBtn = modal.querySelector('.feedback-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }

    // Cancel button click
    const cancelBtn = modal.querySelector('.btn-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => closeModal(modal));
    }

    // Click outside modal to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });

    // Form submit
    const form = modal.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => handleSubmit(e, modal));
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal(modal);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFeedback);
  } else {
    initializeFeedback();
  }
})();
