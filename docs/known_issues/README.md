##Environment: WSL2, Docker Desktop
##ISSUE:
  docker.credentials.errors.InitializationError: docker-credential-desktop.exe not installed or not available in PATH
  [12254] Failed to execute script docker-compose
##FIX:
  update ~/.docker/config.json.
   {"credsStore":"desktop.exe"} to {"_credsStore":"desktop.exe"}
