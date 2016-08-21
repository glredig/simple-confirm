# simple-confirm

-----------

A simple implementation of a customizable confirmation to replace the default browser functionality.


## Usage

------------

To use simple-confirm, include `simple-confirm.js` in your scripts directory, and (optionally) `sc-main.css` in your styles directory.

```javascript

  var link = document.getElementById('test');
  var confirm_item = new SimpleConfirm.ConfirmItem({
	trigger: link,                         // element to add click event on
	message: 'Do you want to proceed?',    // confirm message [default 'Are you sure?']
	confirm_text: 'Affirmative',           // confirm button text [default 'Yes']
	cancel_text: 'Negative',               // cancel button text [default 'Cancel']
	callback: function() {                 // function to call on confirm
		console.log('Simple confirm test!');
	},
	inlineStyle: true,                     // use the javascript to style [default is false, which uses CSS instead]
	enableOverlay: true                    // use overlay behind popup [default false]
  });

  confirm_item.init();
```