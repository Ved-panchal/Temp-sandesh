import { useState, useRef, useEffect } from 'react';

export function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left "
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children({ isOpen })}
    </div>
  );
}

export function DropdownTrigger({ children }) {
  return (
    <div className="text-white focus:outline-none">
      {children}
    </div>
  );
}

export function DropdownMenu({ isOpen, children }) {
  return (
    isOpen && (
      <div className="absolute right-0 mt-2 w-40  bg-primary bg-opacity-70 text-white  shadow-lg z-20">
        <div className="py-1">{children}</div>
      </div>
    )
  );
}

export function DropdownItem({ children }) {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
    >
      {children}
    </a>
  );
}
