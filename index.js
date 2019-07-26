'use strict'

function addItemToList() {
    
    $('#js-shopping-list-form').submit(function(event) {

        event.preventDefault();

        let item = $('#shopping-list-entry').val();
        
        $('.shopping-list').append(
            '<li>' +
            '<span class="shopping-item">' + item + '</span>' +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' + ' ' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>'
        );

        $('#shopping-list-entry').val('');
        $(deleteItem);
        $(checkItemOnList);

    });

}

function checkItemOnList() {

    $('button.shopping-item-toggle').on('click', function (event) {

        $(this).parent('.shopping-item-controls').siblings('span.shopping-item').toggleClass('shopping-item__checked');

    });

}

function deleteItem() {

    $('button.shopping-item-delete').on('click', function(event) {

        $(this).closest('li').remove();
        
    });

}

$(checkItemOnList);
$(deleteItem);
$(addItemToList);