from django.http import HttpResponse
from django.shortcuts import render, redirect, HttpResponse
from vale.forms import UsersForm, LoginForm, ComentariosForm
from vale.models import Usuario, Comentario
# Create your views here.

def home(request):
    return render(request,'home.html')

def homepage(request):
    try:
        profile = {}
        profile['uid'] = Usuario.objects.get(id=request.session['uid'])
        return render(request,'home2.html', profile)
    except:
        return render(request,'home.html')

def agendamento(request):
    data = {}
    data['form'] = UsersForm()
    return render(request,'agendamento.html',data)

def cadastro(request):
    data = {}
    data['form'] = UsersForm()
    return render(request,'cadastro.html',data)


def login(request):
    data = {}
    data['form'] = UsersForm()
    return render(request,'login.html',data)

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
    return redirect('login')


def dologin(request):
    if request.method == "POST":
        tabela = Usuario.objects.all()
        form = UsersForm(request.POST or None)
        try:
            user = Usuario.objects.get(usuario=request.POST['usuario'])
        except:
            return HttpResponse("Falha no Login")
        print(user)
        if user.senha == request.POST['senha']:
            request.session['uid'] = user.id
            return redirect("homepage")
        else:
            return HttpResponse("Falha no Login")
    else:
        redirect('home2')

def profile(request):
    profile = {}
    try:
        profile['perfil'] = UsersForm(instance=Usuario.objects.get(id=request.session['uid']))
        return render(request,'profile.html', profile)
    except:
        return HttpResponse("vc não está logado")

def do_update(request):
    form= Usuario.objects.get(id=request.session['uid'])
    form.usuario = request.POST['usuario']
    form.nome = request.POST['nome']
    form.ultimo_nome = request.POST['ultimo_nome']
    form.save()
    return redirect('home')

def dologout(request):
    if request.session['uid'] != "" or request.session['uid'] != None:
        try:
            del request.session['uid'] # apaga a sessão
            return HttpResponse("Sessão finalizada")
        except KeyError:
            return redirect('home')
    return redirect('home2') 

def comentario(request):
    data ={}
    if request.method == 'POST':
        c = Comentario(usuario=Usuario.objects.get(id=request.session['uid']),comentario=request.POST['comentario'])
        c.save()
        return redirect('comentario')
    else:
        data['form'] = ComentariosForm()
        data['history'] = Comentario.objects.filter(usuario=request.session['uid'])
        print(data['history'])
        return render(request,'comentario.html',data)

def edit_coment(request, id):
    c = Comentario.objects.get(id=id)
    print(c)
    if request.method == 'POST':
        f = ComentariosForm(request.POST,instance=c)
        f.save()
        return redirect('comentario')

    else:    
        f = ComentariosForm(instance=c)
        return render(request,'comentario.html',{'form':f})
