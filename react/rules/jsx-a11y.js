module.exports = {
    rules:{
        'jsx-a11y/alt-text': [1, {
            elements: [ 'img', 'object', 'area', 'input[type="image"]' ],
            img: [],
            object: [],
            area: [],
            'input[type="image"]': []
        }
        ],
        'jsx-a11y/anchor-has-content': [1,{ components: [] }],
        'jsx-a11y/anchor-is-valid': [1,{
            components: [ 'Link' ],
            specialLink: [ 'to' ],
            aspects: [ 'noHref', 'invalidHref', 'preferButton' ]
        }],
        'jsx-a11y/click-events-have-key-events': 1,
        'jsx-a11y/href-no-hash': 0,
        'jsx-a11y/html-has-lang': 1,
        'jsx-a11y/control-has-associated-label': [1, {
            labelAttributes: [ 'label' ],
            controlComponents: [],
            ignoreElements: [
                'audio',    'canvas',
                'embed',    'input',
                'textarea', 'tr',
                'video'
            ],
            ignoreRoles: [
                'grid',       'listbox',
                'menu',       'menubar',
                'radiogroup', 'row',
                'tablist',    'toolbar',
                'tree',       'treegrid'
            ],
            depth: 5
        }
        ],
        'jsx-a11y/label-has-associated-control': [1,  {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'both',
            depth: 25
        }
        ],
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/no-noninteractive-element-interactions': [1, {
            handlers: [
                'onClick',
                'onMouseDown',
                'onMouseUp',
                'onKeyPress',
                'onKeyDown',
                'onKeyUp'
            ]
        }
        ],
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/tabindex-no-positive': 1,
        'jsx-a11y/aria-role':[2,{ ignoreNonDOM: false} ],
        'jsx-a11y/aria-props':2,
        'jsx-a11y/aria-proptypes':2,
        'jsx-a11y/aria-unsupported-elements':2,
        'jsx-a11y/img-redundant-alt':2,
        'jsx-a11y/mouse-events-have-key-events':2,
        'jsx-a11y/no-access-key':2,
        'jsx-a11y/interactive-supports-focus':2,
        'jsx-a11y/role-has-required-aria-props':2,
        'jsx-a11y/role-supports-aria-props':2,
        'jsx-a11y/heading-has-content ':[2, { components: [ '' ] }],
        'jsx-a11y/lang':2,
        'jsx-a11y/no-distracting-elements':[2, { elements: [ 'marquee', 'blink' ] }],
        'jsx-a11y/scope':2,
        'jsx-a11y/accessible-emoji':2,
        'jsx-a11y/aria-activedescendant-has-tabindex ':2,
        'jsx-a11y/iframe-has-title':2,
        'jsx-a11y/no-autofocus':[ 2, { ignoreNonDOM: true }],
        'jsx-a11y/no-redundant-roles':2,
        'jsx-a11y/media-has-caption ':2,
        'jsx-a11y/no-interactive-element-to-noninteractive-role':[2, { tr: [ 'none', 'presentation' ] }],
        'jsx-a11y/no-noninteractive-element-to-interactive-role':[2, {
            ul: [
                'listbox',
                'menu',
                'menubar',
                'radiogroup',
                'tablist',
                'tree',
                'treegrid'
            ],
            ol: [
                'listbox',
                'menu',
                'menubar',
                'radiogroup',
                'tablist',
                'tree',
                'treegrid'
            ],
            li: [ 'menuitem', 'option', 'row', 'tab', 'treeitem' ],
            table: [ 'grid' ],
            td: [ 'gridcell' ]
        }
        ],
        'jsx-a11y/no-noninteractive-tabindex': [ 2 , { tags: [], roles: [ 'tabpanel' ] } ],
        'jsx-a11y/heading-has-content':[2, { components: [ '' ] }],
        'jsx-a11y/aria-activedescendant-has-tabindex':2,
        'jsx-a11y/media-has-caption':[2,{ audio: [], video: [], track: [] } ]
    }
}
