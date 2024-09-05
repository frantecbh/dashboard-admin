import { ChartOverview } from "@/components/chartoverview"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Percent, Users } from "lucide-react"




export const Home = () => {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="tex-lg sm:text-xl text-gray-800 select-none">
                    Total Vendas
                  </CardTitle>                 
                  <DollarSign className="ml-auto size-4" />
                </div>
                <CardDescription>
                    Total vendas em 90 dias
                  </CardDescription>
            </CardHeader>
            <CardContent>
            <p className="text-base sm:text-3xl font-extrabold">R$ 40.000</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="tex-lg sm:text-xl text-gray-800 select-none">
                    Novos Clientes
                  </CardTitle>                 
                  <Users className="ml-auto size-4" />
                </div>
                <CardDescription>
                   Novos clientes em 30 dias
                  </CardDescription>
            </CardHeader>
            <CardContent>
            <p className="text-base sm:text-3xl font-extrabold">213</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="tex-lg sm:text-xl text-gray-800 select-none">
                   Pedidos Hoje
                  </CardTitle>                 
                  <Percent className="ml-auto size-4" />
                </div>
                <CardDescription>
                   Total pedidos hoje
                  </CardDescription>
            </CardHeader>
            <CardContent>
            <p className="text-base sm:text-3xl font-extrabold">69</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="tex-lg sm:text-xl text-gray-800 select-none">
                   Total Pedidos
                  </CardTitle>                 
                  <Percent className="ml-auto size-4" />
                </div>
                <CardDescription>
                   Total pedidos nos ultimos 30 dias
                  </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-base sm:text-3xl font-extrabold">298</p>
            </CardContent>
        </Card>
      </section>

      {/* <section className="mt-4 flex flex-col md:flex-row gap-4"> */}
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartOverview />
          <ChartOverview />          
      </section>
   
    </main>
  )
}
