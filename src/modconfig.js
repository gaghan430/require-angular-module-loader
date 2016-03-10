/*
 * @Author: gaghan
 * @Date:   2016-02-29 12:20:01
 * @Last Modified by:   gaghan
 * @Last Modified time: 2016-03-11 05:22:04
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