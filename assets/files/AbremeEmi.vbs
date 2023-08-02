Option Explicit
Dim answer
answer = MsgBox("¿Quieres salir conmigo, Emi?", vbYesNo, "Te amo ♡")

If answer = vbYes Then
    MsgBox ChrW(&H2665) & " VAMOOSSS, TE AMO EMI <33333", vbInformation, "TE AMO EMI <3"
Else
    MsgBox "Vale, lo entiendo, no pasa nada :(", vbExclamation, ":("
End If
