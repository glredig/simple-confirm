"use strict";

var SimpleConfirm = (function() {
	
	function ConfirmItem(config) {
		this.trigger = config.trigger;
		this.message = config.message || 'Are you sure?';
		this.confirm_text = config.confirm_text || 'Yes';
		this.cancel_text = config.cancel_text || 'Cancel';
		this.callback = config.callback;
		this.styled = config.styled || false;
		this.enableOverlay = config.enableOverlay || false;
	}

	ConfirmItem.prototype = {
		init: function() {
			this.buildHTML();
			this.setupListeners();

			if (this.styled) {
				this.styleHTML();
			}

		},

		buildHTML: function() {
			if (this.enableOverlay) {
				this.overlay = document.createElement('div');
				this.overlay.className = 'sc-overlay';
				document.body.appendChild(this.overlay);
			}

			this.popup = document.createElement('div');
			this.popup.className = 'sc-popup';
			document.body.appendChild(this.popup);

			this.message_box = document.createElement('div');
			this.message_box.className = 'sc-message-box';
			this.message_box.innerText = thiss.message;
			this.popup.appendChild(this.message_box);

			this.confirm_btn = document.createElement('a');
			this.confirm_btn = 'sc-btn sc-confirm';
			this.confirm_btn.href = '#';
			this.confirm_btn.innerText = this.confirm_text;
			this.popup.appendChild(this.confirm_btn);

			this.cancel_btn = document.createElement('a');
			this.cancel_btn = 'sc-btn sc-cancel';
			this.cancel_btn.href = '#';
			this.cancel_btn.innerText = this.cancel_text;
			this.popup.appendChild(this.cancel_btn)
		},

		setupListeners: function() {
			this.trigger.addEventListener('click', this.show)
		}
	}

	return {
		ConfirmItem: ConfirmItem
	}
})();