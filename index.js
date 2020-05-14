function addItem() {
    $('#js-shopping-list-form').submit(event=> {
      event.preventDefault();
      let addedItem =$('#shopping-list-entry').val();
      $('ul').append('<li>' + '<span class="shopping-item">'+addedItem+'</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button></div>')
    });
  }
  $(addItem);


function checkedItem () {
    $('.shopping-item-toggle').on('click', function(event){
      $(event.target).closest('li').toggleClass('shopping-item__checked');
    });
  }
  $(checkedItem);


function deleteItem() {
    $('.shopping-item-delete').on('click',function(event){
      $(event.target).closest('li').remove();
    });
  }
  $(deleteItem);

