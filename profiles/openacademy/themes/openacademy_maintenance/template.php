<?php

/**
 * @file
 * Theme and preprocess functions for Open Academy Maintenance Theme
 */
function openacademy_maintenance_preprocess_maintenance_page(&$variables) {
  global $install_state;
  
  //find the number of tasks to run
  $tasks = install_tasks_to_display($install_state);
  $total = sizeof($tasks);
  
  //find the position of the active task
  $keys = array_keys($tasks);
  $active_task = $install_state['active_task'];
  $current = array_search($active_task, $keys) + 1;
  
  $variables['steps'] = t('@current of @total', array(
    '@current' => $current,
    '@total' => $total,
  ));
  
  $variables['link_chapterthree'] = t('Built by !chapterthree', array(
    '!chapterthree' => l(t('Chapter Three'), 'http://chapterthree.com'),
  ));
  
  $variables['link_drupal'] = t('Powered by !drupal', array(
    '!drupal' => l(t('Drupal'), 'http://drupal.org'),
  ));
  
  $variables['guidelines'] = variable_get('openacademy_install_guidelines', '');
}