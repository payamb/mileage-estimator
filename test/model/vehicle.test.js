describe('VehicleBuilder', () => {
  it('Should be able to add different event types to vehicle event timeline', () => {
    const vehicle = new VehicleBuilder()
      .withId(123)
      .withMake('Ford')
      .build();

    vehicle.events.push({});
  });
});