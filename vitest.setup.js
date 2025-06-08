/* eslint-disable import/no-extraneous-dependencies */

import '@testing-library/jest-dom/vitest';
import '@hexlet/tic-tac-toe/public/style.css';

import { vi } from 'vitest';

const { FUNCTION_VERSION } = process.env;

vi.mock(import('@hexlet/tic-tac-toe'), async (importOriginal) => {
  const original = await importOriginal(); // type is inferred
  if (FUNCTION_VERSION === 'wrong1') {
    return {
      ...original,
      // replace some exports
      TicTacToe: vi.fn().mockImplementation(() => {}),
    };
  }

  return original;
});
