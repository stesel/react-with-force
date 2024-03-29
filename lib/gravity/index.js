import * as React from "react";
import { useAnimationTime } from "../utils/hooks";
import { msToSec } from "../utils/time";
/**
 * Sun.
 */
export const SUN_GRAVITY_ACCELERATION = 273.2;
/**
 * Mercury.
 */
export const MERCURY_GRAVITY_ACCELERATION = 3.71;
/**
 * Venus.
 */
export const VENUS_GRAVITY_ACCELERATION = 8.88;
/**
 * Earth.
 */
export const EARTH_GRAVITY_ACCELERATION = 9.81;
/**
 * Moon.
 */
export const MOON_GRAVITY_ACCELERATION = 1.62;
/**
 * Mars.
 */
export const MARS_GRAVITY_ACCELERATION = 3.86;
/**
 * Jupiter.
 */
export const JUPITER_GRAVITY_ACCELERATION = 23.95;
/**
 * Saturn.
 */
export const SATURN_GRAVITY_ACCELERATION = 10.44;
/**
 * Uranus.
 */
export const URANUS_GRAVITY_ACCELERATION = 8.86;
/**
 * Neptune.
 */
export const NEPTUNE_GRAVITY_ACCELERATION = 11.09;
/**
 * React Context for gravity acceleration sharing.
 */
const GravityContext = React.createContext(EARTH_GRAVITY_ACCELERATION);
/**
 * Wrapper-provider of gravitation acceleration for React children components.
 * @param props - { gravityAcceleration: number }(optional), default value - EARTH_GRAVITY_ACCELERATION.
 */
export const Gravity = props => {
    const { children, gravityAcceleration = EARTH_GRAVITY_ACCELERATION, } = props;
    return (React.createElement(GravityContext.Provider, { value: gravityAcceleration }, children));
};
/**
 * High order component for an effect of gravitation force.
 * @param Component - its props extend interface Y.
 */
export const connectGravity = Component => {
    return props => {
        const gravityAcceleration = React.useContext(GravityContext);
        const y0 = props.y;
        const timeSec = msToSec(useAnimationTime());
        const speedY = gravityAcceleration * timeSec;
        const y = y0 + speedY * timeSec;
        const mergedProps = Object.assign({}, props, { y: y });
        return React.createElement(Component, Object.assign({}, mergedProps));
    };
};
//# sourceMappingURL=index.js.map