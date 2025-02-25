import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

function createMockFont() {
    return {
      className: 'mock-font-class',
      variable: '--mock-font-variable',
      style: { fontFamily: 'mock-font-family' }
    };
  }

// Mock next/image
vi.mock('next/image', () => import('./__mocks__/nextImageMock'))

// Mock static files
vi.mock('\\.svg$', () => 'mocked-svg');

vi.mock('next/font/google', () => ({
    Darker_Grotesque: () => createMockFont(),
    Dela_Gothic_One: () => createMockFont()
  }));

