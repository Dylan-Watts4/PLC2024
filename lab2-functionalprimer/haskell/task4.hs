ask :: String -> IO ()
ask prompt =
  do
  putStrLn prompt
  line <- getLine
  if line == "quit" then putStrLn("quitting...")
  else if line == ""
    then ask (prompt ++ "!")
    else putStrLn ("you said: " ++ reverse line)

main :: IO ()
main =
  do
  let prompt = "please say something"
  ask prompt