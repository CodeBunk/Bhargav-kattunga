import React from "react";

const Icons = (props: { variant?: any; Link?: any }) => {
  switch (props.variant) {
    case "Dribble":
      return (
        <a
          href={props.Link}
          target="_blank"
          className="text-white hover:text-black  cursor-pointer p-2 hover:bg-white rounded-full transition-all duration-300 ease-out-in "
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-inherit "
          >
            <path d="M23.76 9.58A11.99 11.99 0 0 0 0 12a12.08 12.08 0 0 0 3.51 8.49 12.12 12.12 0 0 0 6.07 3.27A11.99 11.99 0 0 0 24 12a12 12 0 0 0-.24-2.42zm-1.51 2.32c-.15-.03-3.62-.78-7.14-.34a38.64 38.64 0 0 0-.9-2.01c4.04-1.66 5.69-4.03 5.7-4.06a10.2 10.2 0 0 1 2.34 6.4zm-3.48-7.6c-.03.05-1.49 2.27-5.35 3.72a52.06 52.06 0 0 0-3.83-5.98 10.23 10.23 0 0 1 9.18 2.27zM7.63 2.74a61.6 61.6 0 0 1 3.8 5.9A37.91 37.91 0 0 1 1.97 9.9c.67-3.18 2.8-5.8 5.66-7.16zM1.75 12l.01-.32c.18 0 5.25.11 10.52-1.46.3.57.58 1.15.83 1.74l-.4.12c-5.53 1.79-8.34 6.76-8.34 6.76A10.21 10.21 0 0 1 1.76 12zM12 22.25a10.2 10.2 0 0 1-6.53-2.35l.23.18s1.97-4.29 8.04-6.4l.07-.02a42.64 42.64 0 0 1 2.2 7.78 10.2 10.2 0 0 1-4.01.8zm5.73-1.75c-.1-.62-.65-3.63-2-7.32 3.31-.53 6.18.38 6.39.45a10.26 10.26 0 0 1-4.4 6.87z" />
          </svg>
        </a>
      );
      break;
    case "Email":
      return (
        <a
          href={props.Link}
          className="text-white hover:text-black  cursor-pointer p-2 hover:bg-white rounded-full transition-all duration-300 ease-out-in "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-inherit scale-105"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      );
      break;
    case "LinkedIn":
      return (
        <a
          href={props.Link}
          target="_blank"
          className="text-white hover:text-black  cursor-pointer p-2 hover:bg-white rounded-full transition-all duration-300 ease-out-in "
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-inherit scale-110"
          >
            <g clip-path="url(#clip0_123_1600)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.16667 2.96875H15.8333C16.7538 2.96875 17.5 3.71494 17.5 4.63542V16.3021C17.5 17.2226 16.7538 17.9688 15.8333 17.9688H4.16667C3.24619 17.9688 2.5 17.2226 2.5 16.3021V4.63542C2.5 3.71494 3.24619 2.96875 4.16667 2.96875ZM6.66667 15.4688C6.89678 15.4688 7.08333 15.2822 7.08333 15.0521V9.21875C7.08333 8.98867 6.89678 8.80208 6.66667 8.80208H5.41667C5.18655 8.80208 5 8.98867 5 9.21875V15.0521C5 15.2822 5.18655 15.4688 5.41667 15.4688H6.66667ZM6.04167 7.96875C5.35131 7.96875 4.79167 7.40911 4.79167 6.71875C4.79167 6.02839 5.35131 5.46875 6.04167 5.46875C6.73202 5.46875 7.29167 6.02839 7.29167 6.71875C7.29167 7.40911 6.73202 7.96875 6.04167 7.96875ZM14.5833 15.4688C14.8134 15.4688 15 15.2822 15 15.0521V11.2187C15.0271 9.89442 14.048 8.76418 12.7333 8.60208C11.8142 8.51813 10.9236 8.94742 10.4167 9.71875V9.21875C10.4167 8.98867 10.2301 8.80208 10 8.80208H8.75C8.51992 8.80208 8.33333 8.98867 8.33333 9.21875V15.0521C8.33333 15.2822 8.51992 15.4688 8.75 15.4688H10C10.2301 15.4688 10.4167 15.2822 10.4167 15.0521V11.9271C10.4167 11.2367 10.9763 10.6771 11.6667 10.6771C12.357 10.6771 12.9167 11.2367 12.9167 11.9271V15.0521C12.9167 15.2822 13.1032 15.4688 13.3333 15.4688H14.5833Z"
                fill="currentColor"
                // fill-opacity="0.65"
              />
            </g>
            <defs>
              <clipPath id="clip0_123_1600">
                <rect
                  width="20"
                  height="20"
                  fill="currentColor"
                  // transform="translate(0 0.46875)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      );
      break;
    case "Behance":
      return (
        <a
          href={props.Link}
          target="_blank"
          className="text-white hover:text-black  cursor-pointer p-2 hover:bg-white rounded-full transition-all duration-300 ease-out-in "
        >
          {/* <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-inherit scale-110"
          >
            <g clip-path="url(#clip0_123_1600)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.16667 2.96875H15.8333C16.7538 2.96875 17.5 3.71494 17.5 4.63542V16.3021C17.5 17.2226 16.7538 17.9688 15.8333 17.9688H4.16667C3.24619 17.9688 2.5 17.2226 2.5 16.3021V4.63542C2.5 3.71494 3.24619 2.96875 4.16667 2.96875ZM6.66667 15.4688C6.89678 15.4688 7.08333 15.2822 7.08333 15.0521V9.21875C7.08333 8.98867 6.89678 8.80208 6.66667 8.80208H5.41667C5.18655 8.80208 5 8.98867 5 9.21875V15.0521C5 15.2822 5.18655 15.4688 5.41667 15.4688H6.66667ZM6.04167 7.96875C5.35131 7.96875 4.79167 7.40911 4.79167 6.71875C4.79167 6.02839 5.35131 5.46875 6.04167 5.46875C6.73202 5.46875 7.29167 6.02839 7.29167 6.71875C7.29167 7.40911 6.73202 7.96875 6.04167 7.96875ZM14.5833 15.4688C14.8134 15.4688 15 15.2822 15 15.0521V11.2187C15.0271 9.89442 14.048 8.76418 12.7333 8.60208C11.8142 8.51813 10.9236 8.94742 10.4167 9.71875V9.21875C10.4167 8.98867 10.2301 8.80208 10 8.80208H8.75C8.51992 8.80208 8.33333 8.98867 8.33333 9.21875V15.0521C8.33333 15.2822 8.51992 15.4688 8.75 15.4688H10C10.2301 15.4688 10.4167 15.2822 10.4167 15.0521V11.9271C10.4167 11.2367 10.9763 10.6771 11.6667 10.6771C12.357 10.6771 12.9167 11.2367 12.9167 11.9271V15.0521C12.9167 15.2822 13.1032 15.4688 13.3333 15.4688H14.5833Z"
                fill="currentColor"
                // fill-opacity="0.65"
              />
            </g>
            <defs>
              <clipPath id="clip0_123_1600">
                <rect
                  width="20"
                  height="20"
                  fill="currentColor"
                  // transform="translate(0 0.46875)"
                />
              </clipPath>
            </defs>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-inherit scale-110"
          >
            <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-3.76 9.74c-3.1 0-3.52 2.55-3.57 3.23l-.01.23c0 .5.1 3.16 3.33 3.3h.43c.66-.01 2.84-.19 3-2.13v-.22h-1.64v.1c-.03.23-.22.8-1.31.85h-.28c-.35 0-1.43-.13-1.53-1.35v-.18h4.81l.02-.12c.05-.64.12-3.7-3.25-3.7zM9.34 7.5H4.5v8.81h4.9c.4 0 2.75-.12 2.89-2.38v-.33c0-.43-.11-1.95-1.55-2.07h-.19s1.42-.1 1.42-1.68c0-1.52-1.07-2.29-2.45-2.35h-.18zm-2.7 4.9H9.41c.22.02.9.19.9 1.2 0 1.03-.73 1.14-1.12 1.15H6.63v-2.36zm9.63-1.37c1.17 0 1.38.9 1.41 1.24l.01.12h-3.05l.02-.1a1.6 1.6 0 0 1 1.61-1.26zM6.63 9.07H9.41c.17.03.59.18.59.91 0 .87-.34 1.03-.75 1.05H6.63V9.07zm11.44-1.05h-3.83V9.1h3.83V8.02z" />
          </svg>
        </a>
      );
      break;
    default:
      return (
        <>
          <div className="w-7 h-7"></div>
        </>
      );

      break;
  }
};

export default Icons;
