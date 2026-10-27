# Sourced by the pipeline scripts so they find the portable Node and FFmpeg
# installs without a global PATH setup. Picks the newest versioned folder.
_add_to_path() {
  case ":$PATH:" in
    *":$1:"*) ;;
    *) [ -d "$1" ] && PATH="$1:$PATH" ;;
  esac
}

TOOLS="/c/Users/mohit.bhatt/tools"

# FFmpeg: newest ffmpeg-*/bin
for _d in "$TOOLS"/ffmpeg-*/bin; do
  [ -d "$_d" ] && _add_to_path "$_d"
done

# Node: newest node-*-win-x64
for _d in "$TOOLS"/node-*-win-x64; do
  [ -d "$_d" ] && _add_to_path "$_d"
done

export PATH
unset _d
