import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock next/image
vi.mock('next/image', () => import('./__mocks__/nextImageMock'))

// Mock static files
vi.mock('\\.svg$', () => 'mocked-svg')