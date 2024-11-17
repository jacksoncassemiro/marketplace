'use client';

import { Box } from '@mantine/core';
import { Container } from "@/components/layout/Container";
import { Logotipo } from "@/components/brand/logotipo";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Box className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Logotipo />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Conectando pessoas, fortalecendo comunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Company History
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
                </li>
              </ul>
            </div>
          </div>
        </Box>

        <Box className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2022 Company Name</p>
          </div>
        </Box>
      </Container>
    </footer>
  );
};