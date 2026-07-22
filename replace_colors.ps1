$srcPath = "src"
$extensions = @("*.tsx", "*.ts", "*.css")

$replacements = @{
    '#0F3B80' = '#0A3D62'
    '#1A54AD' = '#1A5C96'
    '#2B73DD' = '#2E7BC4'
    '#E8F0FE' = '#E6F0F8'
    '#E87A00' = '#FF9933'
    '#B86000' = '#CC7722'
    '#061A40' = '#061528'
    '#F8F9FA' = '#FFFFFF'
    '#f8fafc' = '#FFFFFF'
    'rgba(15, 59, 128' = 'rgba(10, 61, 98'
    'rgba(232, 122, 0' = 'rgba(255, 153, 51'
}

foreach ($ext in $extensions) {
    $files = Get-ChildItem -Path $srcPath -Recurse -Filter $ext
    foreach ($file in $files) {
        $content = Get-Content -Path $file.FullName -Raw
        $modified = $false
        foreach ($key in $replacements.Keys) {
            if ($content -cmatch [regex]::Escape($key)) {
                $content = $content -creplace [regex]::Escape($key), $replacements[$key]
                $modified = $true
            }
        }
        if ($modified) {
            Set-Content -Path $file.FullName -Value $content -NoNewline
            Write-Host "Updated: $($file.FullName)"
        }
    }
}

Write-Host "Done."
