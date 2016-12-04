 #!/bin/bash
 kill -9 `lsof -P | grep ':3000' | awk '{print $2}'`