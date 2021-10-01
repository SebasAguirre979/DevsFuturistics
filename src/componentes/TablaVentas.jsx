import "../estilos/ventas.css"
function Tabla() {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">número de ventas</th>
            <th scope="col">Vendedor</th>
            <th scope="col">código de la venta</th>



            <th scope="col">más información</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <Ventas CantidadDeVentas="1" NombreVendedor="Carlos" CodigoVenta="1234" />
          <Ventas CantidadDeVentas="2" NombreVendedor="Jose" CodigoVenta="1456" />
          <Ventas CantidadDeVentas="3" NombreVendedor="Jose" CodigoVenta="9982" />
          <Ventas CantidadDeVentas="4" NombreVendedor="Luis" CodigoVenta="1265" />
          <Ventas CantidadDeVentas="5" NombreVendedor="Carlos" CodigoVenta="7881" />
          <Ventas CantidadDeVentas="7" NombreVendedor="Jose" CodigoVenta="6542" />
          <Ventas CantidadDeVentas="8" NombreVendedor="Jose" CodigoVenta="1278" />
          <Ventas CantidadDeVentas="9" NombreVendedor="Carlos" CodigoVenta="2135" />



        </tbody>
      </table>


    </div>
  )
}
export default Tabla;



function Ventas(props) {
  return (

    <tr>
      <th scope="row">{props.CantidadDeVentas}</th>
      <td>{props.NombreVendedor}</td>
      <td>{props.CodigoVenta}</td>
      <td>
        <button className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter" >más detalles

        </button>
      </td>
      <td>
        <button className="btn btn-info actualizar " onClick={alerta}  >Actualizar venta

        </button>


        <button className="btn btn-outline-danger eliminar" onClick={alerta} >Eliminar venta

        </button>
      </td>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </tr>


  )

}
function alerta() {
  alert("soy una alerta")




}
