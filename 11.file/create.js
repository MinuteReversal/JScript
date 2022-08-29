var fs = WScript.CreateObject("Scripting.FileSystemObject");
var file = fs.CreateTextFile("D:\\testfile.txt", true);
file.WriteLine("This is a text.");
file.Close();
