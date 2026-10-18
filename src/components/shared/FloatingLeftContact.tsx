"use client";

import React from "react";

interface FloatingLeftContactProps {
  phone?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export default function FloatingLeftContact({
  phone = "+919030505683",
  whatsappNumber = "919030505683",
  whatsappMessage = "Hi, I would like to get a quote and free site inspection.",
}: FloatingLeftContactProps) {
  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes flcShakeKeyframes {
          0%, 70%, 100% {
            transform: rotate(0deg) scale(1);
          }
          72% {
            transform: rotate(-14deg) scale(1.08);
          }
          75% {
            transform: rotate(12deg) scale(1.08);
          }
          78% {
            transform: rotate(-10deg) scale(1.08);
          }
          81% {
            transform: rotate(7deg) scale(1.05);
          }
          84% {
            transform: rotate(-4deg) scale(1.03);
          }
          87% {
            transform: rotate(2deg) scale(1.01);
          }
          90% {
            transform: rotate(0deg) scale(1);
          }
        }

        .flc-wrapper {
          position: fixed;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          pointer-events: auto;
          user-select: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }

        .flc-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          text-decoration: none;
          cursor: pointer;
          outline: none;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }

        /* Call Button - Golden Orange */
        .flc-btn-call {
          background: linear-gradient(135deg, #F5A623 0%, #E8972F 100%);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(232, 151, 47, 0.42), 0 2px 6px rgba(0, 0, 0, 0.12);
          animation: flcShakeKeyframes 4.5s ease-in-out infinite;
        }

        .flc-btn-call:hover {
          background: linear-gradient(135deg, #f7b23b 0%, #d88620 100%);
          transform: scale(1.12);
          box-shadow: 0 12px 30px rgba(232, 151, 47, 0.6), 0 3px 8px rgba(0, 0, 0, 0.18);
          animation-play-state: paused;
        }

        /* WhatsApp Button - Official Brand Green */
        .flc-btn-wa {
          background: linear-gradient(135deg, #25D366 0%, #20BA5A 100%);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.42), 0 2px 6px rgba(0, 0, 0, 0.12);
          animation: flcShakeKeyframes 4.5s ease-in-out 1.8s infinite;
        }

        .flc-btn-wa:hover {
          background: linear-gradient(135deg, #2ae06d 0%, #1da851 100%);
          transform: scale(1.12);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6), 0 3px 8px rgba(0, 0, 0, 0.18);
          animation-play-state: paused;
        }

        /* Ripple Ring Effect */
        .flc-btn::before {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid currentColor;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .flc-btn:hover::before {
          opacity: 0.25;
          inset: -6px;
        }

        .flc-btn-icon {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          fill: currentColor;
          flex-shrink: 0;
        }

        /* Tooltip sliding to the right */
        .flc-tooltip {
          position: absolute;
          left: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(-6px);
          background-color: #0F172A;
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.2px;
          padding: 7px 12px;
          border-radius: 7px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.35);
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.22s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 10000;
        }

        /* Tooltip Arrow */
        .flc-tooltip::before {
          content: "";
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: transparent #0F172A transparent transparent;
        }

        .flc-btn:hover .flc-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(0);
        }

        /* Mobile Optimization */
        @media (max-width: 640px) {
          .flc-wrapper {
            left: 10px;
            gap: 10px;
          }
          .flc-btn {
            width: 46px;
            height: 46px;
          }
          .flc-btn-icon {
            width: 22px;
            height: 22px;
          }
          .flc-tooltip {
            display: none !important;
          }
        }
      `,
        }}
      />

      <div className="flc-wrapper" aria-label="Contact quick links">
        {/* Call Button */}
        <a
          href={`tel:${cleanPhone}`}
          className="flc-btn flc-btn-call"
          aria-label="Call Now"
          title="Call Now"
        >
          <div className="flc-btn-icon">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <span className="flc-tooltip">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flc-btn flc-btn-wa"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <div className="flc-btn-icon">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#FFFFFF"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282 0 11.782 0c3.148.001 6.107 1.227 8.331 3.454 2.224 2.227 3.447 5.189 3.445 8.34-.005 6.505-5.282 11.783-11.784 11.783-2.001-.001-3.973-.513-5.733-1.488L0 24zm6.49-4.22c1.674.993 3.328 1.52 5.232 1.522 5.344 0 9.69-4.346 9.693-9.693.002-2.593-1.002-5.029-2.827-6.856-1.825-1.826-4.26-2.83-6.853-2.83-5.348 0-9.695 4.345-9.698 9.692-.001 1.954.513 3.619 1.547 5.247l-.99 3.614 3.738-.98l.161.096zm12.39-7.142c-.27-.135-1.597-.788-1.848-.88-.25-.091-.433-.135-.615.135-.183.27-.707.88-.867 1.064-.16.183-.32.206-.59.072-1.353-.679-2.355-1.196-3.149-2.55-.213-.364.213-.338.61-.1.356.208.4.27.6.4.2.13.1.25.05.35-.05.1-.515 1.24-.635 1.53-.12.285-.24.3-.51.185-.27-.135-1.144-.421-2.18-1.346-.806-.717-1.35-1.605-1.508-1.876-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.473.134-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.615-1.485-.84-2.03-.22-.53-.443-.457-.615-.466-.16-.008-.344-.01-.527-.01-.183 0-.482.068-.733.338-.25.27-.954.934-.954 2.279s.977 2.639 1.114 2.82c.137.18 1.921 2.934 4.654 4.114.65.28 1.157.447 1.554.573.653.208 1.248.179 1.718.109.523-.078 1.598-.654 1.825-1.254.227-.6.227-1.114.159-1.224-.069-.11-.25-.18-.52-.315z" />
            </svg>
          </div>
          <span className="flc-tooltip">Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
