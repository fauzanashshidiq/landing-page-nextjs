"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top CTA within footer */}
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <p className="text-sm text-gray-400 mb-6">Let's Collaborate</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug max-w-3xl">
          Ready to turn your ideas into exceptional designs?
          <br />
          Contact us today, and let's make something amazing together!
        </h2>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block rounded-md bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-200 transition"
          >
            LET'S TALK
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white text-black">
              ★
            </span>
            <span className="font-semibold">Creativo.</span>
          </div>
          <p className="text-sm text-gray-400 leading-6 max-w-xs">
            Creativo is where your imagination and our expertise converge to
            create design solutions that elevate your brand and set you apart
            from the competition.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href="mailto:hello@creativo.com" className="hover:underline">
              hello@creativo.com
            </a>
            <p>+1-800-123 4567</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a className="hover:text-white" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a className="hover:text-white" href="#">
                Help
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Discover</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a className="hover:text-white" href="#">
                Affiliate
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Partner Program
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Copyright © 2032 Creativo®. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              aria-label="Twitter"
              href="#"
              className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-800 hover:bg-gray-900"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.9-2.6 1.1-.7-.8-1.7-1.3-2.8-1.3-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.3-.2-6.2-1.8-8.1-4.2-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.5 3.1 3.8-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.6 2 2.8 3.8 2.8-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-.9-.1 1.8 1.2 4 1.9 6.4 1.9 7.7 0 11.9-6.4 11.9-11.9v-.6c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              href="#"
              className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-800 hover:bg-gray-900"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 18.3H6V9h2.3v9.3zM7.1 7.9c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zM18.3 18.3H16V13c0-1.1-.4-1.8-1.4-1.8-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8v5.3H10.7V9h2.2v1.3c.3-.5 1.1-1.5 2.7-1.5 1.9 0 3 1.3 3 4.2v5.3z" />
              </svg>
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-800 hover:bg-gray-900"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.7V12h2.7V9.7c0-2.6 1.6-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
