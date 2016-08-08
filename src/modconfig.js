/*
 * @Author: gaghan
 * @Date:   2016-02-29 12:20:01
 * @Last Modified by:   Dodik Gaghan
<<<<<<< 8f2cdd5960c36adf1789a7bd12beeff2d25b0b2c
 * @Last Modified time: 2016-08-08 20:52:13
=======
 * @Last Modified time: 2016-08-08 19:51:11
>>>>>>> Change 1
 */
'use strict';
define(['base'], function(base) {
    return {
        normalize: function(name, normalize) {
            if (name == '@') {
                name = 'config';
            }
            return base.normalize(name, normalize);
        },
  
        load: function(name, req, onload, config) {
            base.validate(config, 'modconfig');
            var structure = config.structure;
            var modconfig = base.value(name);
            var extension = 'json';
            if (structure.modconfig.hasOwnProperty('extension')) {
                extension = structure.modconfig.extension;
            }
<<<<<<< 8f2cdd5960c36adf1789a7bd12beeff2d25b0b2c

=======
            
>>>>>>> Change 1
            var path = structure.modconfig.path.replace(/{config}/g, modconfig).replace(/{extension}/g, extension);
            var module = base.module(name);
            var reqPath = base.path(path, config, base.getCurrentUrl(req), module);
            
            req(['text!' + reqPath], function(value) {
                if (extension === 'json') value = JSON.parse(value);
                onload(value);
            });
        }
    }
});