from django.forms import ModelForm
from django import forms 
from vale.models import Usuario, Comentario


class UsersForm(ModelForm):
    senha = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = Usuario
        widgets = {'password': forms.PasswordInput(),}
        fields = ['usuario', 'senha', 'nome', 'sobrenome','celular', 'cpf',]

class LoginForm(ModelForm):
    class Meta:
        model = Usuario
        widgets = {'password': forms.PasswordInput(),}
        fields = ['usuario', 'senha']

class ComentariosForm(ModelForm):
    class Meta:
        model = Comentario
        fields = ['comentario']
