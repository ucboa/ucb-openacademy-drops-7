<?php

/**
 * @file
 * Definition of MediaBrowserUpload.
 */

/**
 * Media browser plugin for showing the upload form.
 *
 * @deprecated
 */
class MediaBrowserUpload extends MediaBrowserPlugin {
  /**
   * Implements MediaBrowserPluginInterface::access().
   */
  public function access($account = NULL) {
    // @todo Replace with file_access().
    return media_access('edit', $account);
  }

  /**
   * Implements MediaBrowserPlugin::view().
   */
  public function view() {
    module_load_include('inc', 'media', 'includes/media.pages');

    $build = array();
    if ($this->params['multiselect'] && module_exists('plupload')) {
      $build['form'] = drupal_get_form('media_add_upload_multiple', $this->params);
      $build['#attached']['js'][] = drupal_get_path('module', 'media') . '/js/plugins/media.upload_multiple.js';
    }
    else {
      $build['form'] = drupal_get_form('media_add_upload', $this->params);
    }

    return $build;
  }
}
