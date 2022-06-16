import { rejects } from 'assert';
import db from './db';

export async function findAll() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM synergy.workspace;', (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

export function create(workspaceInfo: { name: string; profile: string }) {
  const { name, profile } = workspaceInfo;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO workspace SET name=?, workspace_img=?',
      [name, profile],
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}

export function getWorkspaceById(workspaceIdx: number) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM workspace WHERE workspace_idx = ?',
      workspaceIdx,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}

export function updateById(
  workspaceIdx: number,
  workspaceInfo: { name: string; profile: string }
) {
  const { name, profile } = workspaceInfo;

  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE workspace SET name = ?, workspace_img = ? WHERE workspace_idx = ?',
      [name, profile, workspaceIdx],
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}

export function remove(workspaceIdx: number) {
  return new Promise((resolve, reject) => {
    db.query(
      'DELETE from workspace where workspace_idx = ?',
      workspaceIdx,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}