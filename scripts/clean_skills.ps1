# clean_skills.ps1
# Script to clean up unnecessary skills in .agent/skills/

$keepList = @(
    "antigravity-design-expert",
    "antigravity-skill-orchestrator",
    "antigravity-workflows",
    "ui-ux-pro-max"
)

$skillsPath = Join-Path $PSScriptRoot "../.agent/skills"
$dirs = Get-ChildItem -Directory -Path $skillsPath

Write-Host "Starting skills cleanup in $skillsPath..."

foreach ($dir in $dirs) {
    $name = $dir.Name
    $shouldKeep = $false
    
    # Check if folder name is explicitly in keep list or contains 'react'
    if ($keepList -contains $name -or $name -like "*react*") {
        $shouldKeep = $true
    }
    
    if (-not $shouldKeep) {
        Write-Host "Deleting skill: $name"
        $relPath = ".agent/skills/$name"
        
        # Untrack and delete using git rm
        git rm -r -f $relPath 2>$null
        
        # Force remove if directory still exists (e.g. untracked files remained)
        if (Test-Path $dir.FullName) {
            Remove-Item -Recurse -Force $dir.FullName
        }
    } else {
        Write-Host "Keeping skill: $name"
    }
}

Write-Host "Cleanup completed successfully!"
