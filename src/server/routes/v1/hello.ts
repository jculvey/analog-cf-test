import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => ({
  success: true,
  colo: event.context.cf.colo,
}));
