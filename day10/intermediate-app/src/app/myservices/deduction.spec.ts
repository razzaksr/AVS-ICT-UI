import { Deduction } from './deduction';
// zoneless testing>> since Testing hasn't done via TestBed
describe('Deduction', () => {
  let service: Deduction; // declare
  beforeEach(() => {
    service = new Deduction()// instance creation
  });
  // test case
  it('should be created', () => {
    expect(service).toBeTruthy()
  });
  // test case
  it('No tax slab',()=>{
    service.salary=2.4
    const result = service.calculate()
    expect(result).toBe(2.4)
  })
  // test case
  it('10 Percent slab',()=>{
    service.salary=13.5
    const result = service.calculate()
    // expect(result).toBeLessThanOrEqual(12)
    expect(result).toBeGreaterThanOrEqual(12)
  })
});
