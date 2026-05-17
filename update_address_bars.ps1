
$htmlDir = "c:\Development\Makhana\html\scout\operational"
$files = Get-ChildItem -Path $htmlDir -Filter "*.html" -File | Where-Object { $_.Name -ne "dashboard.html" -and $_.Name -ne "rejection_handling.html" }

$cssCSS = ".address-bar { background: #141416; border: 1px solid #27272a; border-radius: 8px; padding: 10px 16px; margin-bottom: 48px; display: flex; align-items: center; gap: 12px; max-width: 1280px; margin-left: auto; margin-right: auto; }`n    .address-bar-icon { font-size: 14px; color: #06b6d4; }`n    .address-bar-path { font-family: 'Inter', sans-serif; font-size: 13px; color: #9ca3af; word-break: break-all; }"

$updatedFiles = @()

foreach ($file in $files) {
    $filePath = $file.FullName
    $filename = $file.Name
    $content = Get-Content -Path $filePath -Raw

    # 1. Add CSS before </style> - look for the last style rule ending with }
    if ($content -match '}(\s*)</style>') {
        $cssToInsert = "`n    " + $cssCSS + "`n  "
        $content = $content -replace '(}(\s*))</style>', "`$1$cssToInsert</style>"
    }

    # 2. Add address bar HTML after the closing tag before workflow/stepper divs
    # Look for </div> followed by optional whitespace and then a div with class starting with "workflow" or "stepper"
    if ($content -match '</div>(\s*)<div class="(workflow|stepper)') {
        $htmlToAdd = "`n  <div class=`"address-bar`">`n    <div class=`"address-bar-icon`">📁</div>`n    <div class=`"address-bar-path`" id=`"address-path`">html/scout/operational/$filename</div>`n  </div>`n"
        $content = $content -replace '(</div>)(\s*)(<div class="(workflow|stepper))', "`$1$htmlToAdd`$2`$3"
    }

    # 3. Add JavaScript before </body>
    $jsToAdd = "`n  <script>`n    document.addEventListener('DOMContentLoaded', function() {`n      const pathElement = document.getElementById('address-path');`n      if (pathElement) {`n        const pathname = window.location.pathname;`n        pathElement.textContent = pathname.replace(/^\//, '').replace(/\/$/, '') || pathname;`n      }`n    });`n  </script>"
    $content = $content -replace '</body>', "$jsToAdd`n</body>"

    Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
    $updatedFiles += $filename
}

Write-Host "Updated: $($updatedFiles.Count) files"
$updatedFiles | ForEach-Object { Write-Host "  - $_" }
