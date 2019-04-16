<div className="content-form">
  <h3 className="title-lock">Bloqueo de cuenta</h3>
  <p className="text-lock">Si extravías tu dispositivo bloquea de inmediato tu cuenta, y en cuanto la recuperes puedes desbloquearla con solo un botón.</p>
  <form>
  <FormGroup>
    <Label for="name">Nombre</Label>
    <Input type="text" name="name" id="name" placeholder="Nombre Apellido" />
  </FormGroup>
  <FormGroup>
    <Label for="">Fecha de nacimiento</Label>
    <Input type="number" name="company" id="" placeholder="xx/xx/xx" />
  </FormGroup>
  <FormGroup>
    <Label for="mail">Correo</Label>
    <Input type="mail" name="mail" id="mail" placeholder="mail@example.com" />
  </FormGroup>
  <FormGroup>
    <Label for="">Teléfono</Label>
    <Input type="number" name="mail" id="" placeholder="442 290 38 00" />
  </FormGroup>
  <Button className="btn-lock">Verificar cuenta</Button>
  </form>
</div>
