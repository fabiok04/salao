from django.shortcuts import render, redirect
from vale.forms import UsersForm
from vale.models import Usuario 
# Create your views here.

def home(request):
        tabela = Usuario.objects.all()
        return render(request,'home.html',{'usuario':tabela})

def cadastro(request):
    data = {}
    data['form'] = UsersForm()
    return render(request,'cadastro.html',data)

def docad(request):
    tabela = Usuario.objects.all()
    form = UsersForm(request.POST or None)
    erro = ''
    for c in tabela:        
        if form['usuario'].data == c.usuario:
            erro = "Mensagem de erro"
        
    if form.is_valid() and erro == '':
        form.save()
    #if form.is_valid():
		#form.save()
    return redirect('home')