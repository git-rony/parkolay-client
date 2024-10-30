import React from "react";
import { NavLink } from "react-router-dom";

const StyleNavLink = () => {
  const StyledNavLink = styled(NavLink)`
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    color: #4b5563; /* Default Gray-600 */
    transition: background-color 0.3s ease;

    &.active {
      background-color: #05b6c7; /* secondaryColor */
      color: white;
      font-weight: 600;
    }

    &:hover {
      background-color: #e5e7eb; /* Gray-200 */
    }
  `;
  return <div></div>;
};

export default StyleNavLink;
