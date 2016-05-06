#
# ngCli.ps1
#
param(
    [ValidateSet("build")]
    [string]
    $Action  = "build"
)


function Invoke-AngularBuild
{
    # save the current location so we can reuse in evelated session
    $env:project:Directory = Get-Location

    # run ng build in evelated session
    Start-Process powershell -Verb runAs -ArgumentList @("-NonInteractive","-NoProfile ","-Command"," `"Set-Location $env:project:Directory;ng build`" ")
}


Switch($Action.ToLower())
{
    "build" {Invoke-AngularBuild}
    default {Write-Warning "$Action is currently unsupported."}
}