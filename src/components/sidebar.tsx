import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, User } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export const Sidebar = () => {
  return (
    <div className='flex w-full flex-col bg-muted/40'>

    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col'>
        <nav className='flex flex-col items-center gap-4 px-2 py-5'>
          <TooltipProvider>
              <Link 
              to="#"
              className='flex size-9 items-center justify-center bg-primary text-primary-foreground rounded-full shrink-0'
              >
              
              <Package className='h-4 w-4' />
              <span className='sr-only'>Dasboard Avatar</span>
              </Link>
            <Tooltip>
                <TooltipTrigger asChild>

                <Link 
              to="/"
              className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
              
              <Home className='h-5 w-5' />
              <span className='sr-only'>Home</span>
              </Link>

                </TooltipTrigger>
                <TooltipContent className='bg-slate-700 text-slate-50' side='right'>Home</TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>

                <Link 
            to="/pedidos"
              className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
              
              <ShoppingBag className='h-5 w-5' />
              <span className='sr-only'>Pedidos</span>
              </Link>

                </TooltipTrigger>
                <TooltipContent className='bg-slate-700 text-slate-50'side='right'>Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>

                <Link 
              to="#"
              className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
              
              <Package className='h-5 w-5' />
              <span className='sr-only'>Produtos</span>
              </Link>

                </TooltipTrigger>
                <TooltipContent className='bg-slate-700 text-slate-50'side='right'>Produtos</TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>

                <Link 
              to="#"
              className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
              
              <User className='h-5 w-5' />
              <span className='sr-only'>Clientes</span>
              </Link>

                </TooltipTrigger>
                <TooltipContent className='bg-slate-700 text-slate-50' side='right'>Clientes</TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>

                <Link 
              to="#"
              className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
              
              <Settings2 className='h-5 w-5' />
              <span className='sr-only'>Configurações</span>
              </Link>

                </TooltipTrigger>
                <TooltipContent className='bg-slate-700 text-slate-50' side='right'>Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>
          <TooltipProvider>
          <Tooltip>
                <TooltipTrigger asChild>

                <Link 
              to="#"
              className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
              
              <LogOut className='h-5 w-5' />
              <span className='sr-only'>Sair</span>
              </Link>

                </TooltipTrigger>
                <TooltipContent className='bg-slate-700 text-slate-50' side='right'>Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
    </aside>


      {/* Mobile */}
      <div className='sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <header className='sticky top-0 z-30 flex items-center h-14 px-4 border-b bg-background'>
          <Sheet>
              <SheetTrigger asChild>
                    <Button size='icon' variant="outline" className='sm:hidden'>
                      <PanelBottom className='size-5' />
                      <span className='sr-only'>Abrir / Fechar</span>
                    </Button>
              </SheetTrigger>
              <SheetContent side={'left'} className='sm:max-w-xs'>
                  <nav className='grid gap-6 tex-lg font-medium'>
                    <Link
                    className='flex size-10 bg-primary text-lg rounded-full items-center justify-center text-primary-foreground md:text-base gap-2'
                    to='/'>
                        <Package className='size-5 transition-all' />
                        <span className='sr-only'>Logo</span>
                    </Link>
                    <Link
                    className='flex items-center gap-2 px-2.5 text-muted-foreground hover:text-foreground'
                    to='#'>
                        <Home className='size-5 transition-all' />
                        Início
                    </Link>
                    <Link
                    className='flex items-center gap-2 px-2.5 text-muted-foreground hover:text-foreground'
                    to='/pedidos'>
                        <ShoppingBag className='size-5 transition-all' />
                        Pedidos
                    </Link>
                    <Link
                    className='flex items-center gap-2 px-2.5 text-muted-foreground hover:text-foreground'
                    to='#'>
                        <Package className='size-5 transition-all' />
                        Produtos
                    </Link>
                    <Link
                    className='flex items-center gap-2 px-2.5 text-muted-foreground hover:text-foreground'
                    to='#'>
                        <User className='size-5 transition-all' />
                        Clients
                    </Link>
                    <Link
                    className='flex items-center gap-2 px-2.5 text-muted-foreground hover:text-foreground'
                    to='#'>
                        <Settings2 className='size-5 transition-all' />
                        Configurações
                    </Link>
                  </nav>
              </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  )
}
