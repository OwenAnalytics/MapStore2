/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const SET_RASTERSTYLE_PARAMETER = 'SET_RASTERSTYLE_PARAMETER';
export const SET_RASTER_LAYER = 'SET_RASTER_LAYER';

export function setRasterStyleParameter(component, property, value) {
    return {
        type: SET_RASTERSTYLE_PARAMETER,
        component,
        property,
        value
    };
}
export function setRasterLayer(layer) {
    return {
        type: SET_RASTER_LAYER,
        layer
    };
}
