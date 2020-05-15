function addItem() {
    $('#js-shopping-list-form').submit(event=> {
      event.preventDefault();
      let addedItem =$('#shopping-list-entry').val();
      $('ul').append('<li>' + '<span class="shopping-item">'+addedItem+'</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button></div>')
    });
  }
  $(addItem);


function checkedItem () {
  $('.shopping-list').on('click','.shopping-item-toggle', function() {
      $(event.target).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
  }
  $(checkedItem);


function deleteItem() {
    $('.shopping-list').on('click','.shopping-item-delete', function() {
      $(event.target).closest('li').remove();
    });
  }
  $(deleteItem);
