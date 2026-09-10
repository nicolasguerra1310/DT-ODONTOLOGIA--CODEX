$src = Join-Path $env:USERPROFILE '.gemini\antigravity\brain\28d9fdb4-2d11-4f20-960a-e1d870760326'
$dst = 'c:\proyecto_net\Antigravity\DT_Odontologia\images'

$files = @{
    'dt_logo_1777485386025.png' = 'logo.png'
    'hero_dental_1777485404195.png' = 'hero.png'
    'doctor_portrait_1777485417559.png' = 'doctor.png'
    'carousel_smile_1777485441525.png' = 'carousel-smile.png'
    'carousel_equipment_1777485455142.png' = 'carousel-equipment.png'
    'carousel_treatment_1777485469074.png' = 'carousel-treatment.png'
}

foreach ($entry in $files.GetEnumerator()) {
    $source = Join-Path $src $entry.Key
    $target = Join-Path $dst $entry.Value
    Copy-Item $source $target -Force
    Write-Host "Copied: $($entry.Value)"
}

Write-Host "`nAll images copied successfully!"
Get-ChildItem $dst | Format-Table Name, Length -AutoSize
