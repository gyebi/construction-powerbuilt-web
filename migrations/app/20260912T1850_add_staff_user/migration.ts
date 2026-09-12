#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/04a6e8ae6740f843d3d488e0ba285c26319b118312ce3fdc060c13e790d1dd21/contract';
import endContract from '../../snapshots/04a6e8ae6740f843d3d488e0ba285c26319b118312ce3fdc060c13e790d1dd21/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/06e0e16441d162b2af5a03a823d3bf233ac1ea324fe64fbfd3ade1d63157ae3f/contract';
import startContract from '../../snapshots/06e0e16441d162b2af5a03a823d3bf233ac1ea324fe64fbfd3ade1d63157ae3f/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, lit, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'staffUser',
        columns: [
          col('active', 'bool', {
            notNull: true,
            default: lit(true),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('displayName', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('firebaseUid', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('role', 'text', {
            notNull: true,
            default: lit('STAFF'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'staffUser',
        constraint: 'staffUser_firebaseUid_key',
        columns: ['firebaseUid'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'staffUser',
        constraint: 'staffUser_email_key',
        columns: ['email'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
