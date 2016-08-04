(function (global, factory) {

    'use strict';

    // AMD environment
    if (typeof define === 'function' && define.amd) {
        define(['ractive'], factory);
    }

    // Common JS (i.e. node/browserify)
    else if (typeof module !== 'undefined' && module.exports && typeof require === 'function') {
        factory(require('ractive'));
    }

    // browser global
    else if (global.Ractive) {
        factory(global.Ractive);
    }

    else {
        throw new Error('Could not find Ractive! It must be loaded before the ractive-components-ractive-summernote plugin');
    }

}(typeof window !== 'undefined' ? window : this, function (Ractive) {

    'use strict';

    Ractive.components['summernote'] = Ractive.extend({
        template: "<textarea></textarea>",
        isolated: true,
        data: {
            airmode: false,
            width: null,
            height: null,
            focus: false,
            tabSize: 4,
            styleWithSpan: true,
            shortcuts: true,
            direction: null
        },
        onrender: function () {
            var self = this;
            var textarea = this.find('textarea');

            var updating = false;

            var summernote = $(textarea);
            summernote.summernote(
                {
                    airMode: this.get("airmode"),
                    width: this.get("width"),
                    height: this.get("height"),
                    focus: this.get("focus"),
                    tabSize: this.get("tabsize"),
                    styleWithSpan: this.get("stylewithspan"),
                    shortcuts: this.get("shortcuts"),
                    direction: this.get("direction")
                }
            );

            summernote.on("summernote.change", function () {
                if (this.updating) {
                    return;
                }
                this.updating = true;
                self.set('value', summernote.summernote('code'));
                this.updating = false;
            });

            this.observe('value', function (val) {
                if (this.updating) {
                    return;
                }
                this.updating = true;
                summernote.summernote('code', val);
                this.updating = false;
            });

            this.on('teardown', function () {
                summernote.summernote('destroy');
            });
        }
    });

}));