$(function() {
    // create wysiwyg:
    var wysiwygeditor = wysiwyg({
        element: $('#field') || document.getElementById('field'),
        onKeyDown: function( key, character, shiftKey, altKey, ctrlKey, metaKey ) {
            },
        onKeyPress: function( key, character, shiftKey, altKey, ctrlKey, metaKey ) {
            },
        onKeyUp: function( key, character, shiftKey, altKey, ctrlKey, metaKey ) {
            },
        onSelection: function( collapsed, rect, nodes, rightclick ) {
            },
        onPlaceholder: function( visible ) {
            },
        onClosepopup: function() {
            },
        hijackContextmenu: false
    });

    // properties:
    wysiwygeditor.getElement();
    wysiwygeditor.getHTML(); -> 'html'
    wysiwygeditor.setHTML( html );
    wysiwygeditor.getSelectedHTML(); -> 'html'|false
    wysiwygeditor.sync();
    wysiwygeditor.readOnly(); // -> query
    wysiwygeditor.readOnly( true|false );

    // selection and popup:
    wysiwygeditor.collapseSelection();
    wysiwygeditor.expandSelection( preceding, following );
    wysiwygeditor.openPopup(); -> popup-handle
    wysiwygeditor.closePopup();

    // exec commands:
    wysiwygeditor.removeFormat();
    wysiwygeditor.bold();
    wysiwygeditor.italic();
    wysiwygeditor.underline();
    wysiwygeditor.strikethrough();
    wysiwygeditor.forecolor( color );
    wysiwygeditor.highlight( color );
    wysiwygeditor.fontName( fontname );
    wysiwygeditor.fontSize( fontsize );
    wysiwygeditor.subscript();
    wysiwygeditor.superscript();
    wysiwygeditor.align( 'left'|'center'|'right'|'justify' );
    wysiwygeditor.format( tagname );
    wysiwygeditor.indent( outdent );
    wysiwygeditor.insertLink( url );
    wysiwygeditor.insertImage( url );
    wysiwygeditor.insertHTML( html );
    wysiwygeditor.insertList( ordered );
});