import fs from 'fs';
import gulp from 'gulp';

/**
 * Allows to require each task by scanning the current folder
 */
let tasks = fs.readdirSync('./gulp/tasks/');
tasks.forEach((task) => {
  if (task !== 'index.js') require(`./${task}`);
});
