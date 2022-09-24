<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Filesystem\Filesystem;

class ClearStorageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fs = new Filesystem;

        // delete directories
        $except_folder_names = [
            // folder name (storage/app/public/<folder_name>)
        ];
        $folder_paths = $fs->directories(storage_path('app/public'));
        foreach ($folder_paths as $folder_path) {
            $folder_name = last(explode('/', $folder_path));
            if (! in_array($folder_name, $except_folder_names)) {
                $fs->deleteDirectory($folder_path);
            }
        }
    }
}
