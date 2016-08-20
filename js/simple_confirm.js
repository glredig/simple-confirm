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
			this.message_box.innerText = this.message;
			this.popup.appendChild(this.message_box);

			this.confirm_btn = document.createElement('a');
			this.confirm_btn.className = 'sc-btn sc-confirm';
			this.confirm_btn.href = '#';
			this.confirm_btn.innerText = this.confirm_text;
			this.popup.appendChild(this.confirm_btn);

			this.cancel_btn = document.createElement('a');
			this.cancel_btn.className = 'sc-btn sc-cancel';
			this.cancel_btn.href = '#';
			this.cancel_btn.innerText = this.cancel_text;
			this.popup.appendChild(this.cancel_btn)
		},

		setupListeners: function() {
			this.trigger.addEventListener('click', this.show.bind(this));

			this.confirm_btn.addEventListener('click', this.callback);

			this.cancel_btn.addEventListener('click', this.hide.bind(this));
		},

		styleHTML: function() {
			console.log('style');
			
			if (this.enableOverlay) {
				this.overlay.style.display = 'none';
				this.overlay.style.backgroundColor = 'rgba(0, 0, 0, .4)';
				this.overlay.style.position = 'absolute';
				this.overlay.style.top = '0px';
				this.overlay.style.bottom = '0px';
				this.overlay.style.left = '0px';
				this.overlay.style.right = '0px';
			}

			this.popup.style.display = 'none';
			this.popup.style.width = '300px';
			this.popup.style.height = '200px';
			this.popup.style.position = 'fixed';
			this.popup.style.top = '50%';
			this.popup.style.left = '50%';
			this.popup.style.boxShadow = '0 0 2px 2px #555';
			this.popup.style.borderRadius = '4px';
			this.popup.style.backgroundColor = 'rgb(255, 255, 255)';
			this.popup.style.padding = '2em';

			this.message_box.style.height = '150px';
			this.message_box.style.textAlign = 'center';

			this.confirm_btn.style.display = 'inline-block';
			this.confirm_btn.style.backgroundColor = '#aeaecc';
			this.confirm_btn.style.padding = '1em 1.5em';
			this.confirm_btn.style.float = 'right';
			this.confirm_btn.style.marginLeft = '2em';
			this.confirm_btn.style.borderRadius = '.3em';
			this.confirm_btn.style.textDecoration = 'none';

			this.cancel_btn.style.display = 'inline-block';
			this.cancel_btn.style.backgroundColor = '#cccccc';
			this.cancel_btn.style.padding = '1em 1.5em';
			this.cancel_btn.style.float = 'right';
			this.cancel_btn.style.borderRadius = '.3em';
			this.cancel_btn.style.textDecoration = 'none';
		},

		show: function() {
			if (this.enableOverlay) {
				this.overlay.style.display = 'block';
			}

			this.popup.style.display = 'block';
		},

		hide: function() {
			if (this.enableOverlay) {
				this.overlay.style.display = 'none';
			}

			this.popup.style.display = 'none';
		}
	}

	return {
		ConfirmItem: ConfirmItem
	}
})();